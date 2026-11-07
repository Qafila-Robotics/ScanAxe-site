#!/bin/sh
# Server-side commit policy (F-006). Usage: check-commit-policy.sh <base-sha> <head-sha> [pr-title]
# Same rules as .githooks/commit-msg, plus: subjects start with a story ID.
set -eu
base="$1"; head="$2"; title="${3:-}"
fail=0
ai='claude|chatgpt|copilot|(^|[^a-z])gpt([^a-z]|$)|generated with|ai[ -]assistant'
id='^(F-[0-9]{3}|OPS-[0-9]{2}): '

check() { # $1 = label, $2 = full message
  subject=$(printf '%s\n' "$2" | head -n1)
  if printf '%s\n' "$2" | grep -qiE '^[[:space:]]*co-authored-by:'; then
    echo "::error::$1: Co-Authored-By trailers are not allowed"; fail=1
  fi
  if printf '%s\n' "$2" | grep -qiE "$ai"; then
    echo "::error::$1: remove AI/assistant mentions"; fail=1
  fi
  if ! printf '%s\n' "$subject" | grep -qE "$id"; then
    echo "::error::$1: subject must start with 'F-xxx: ' or 'OPS-xx: ' (got: $subject)"; fail=1
  fi
}

for sha in $(git rev-list --no-merges "$base..$head"); do
  check "commit $(git rev-parse --short "$sha")" "$(git log -1 --format=%B "$sha")"
done
[ -n "$title" ] && check "PR title" "$title"

if [ "$fail" = 0 ]; then echo "commit policy OK"; else
  echo "Fix with: git rebase -i $base (reword), then force-push the branch."; exit 1; fi
