module.exports = {
  "say": "say \"<ARG del='\\ ' />\"",
  "enhance": "osascript -e 'tell application \"System Events\"to repeat 2 times' -e 'key code 24 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "zoom out": "osascript -e 'tell application \"System Events\" to repeat 2 times' -e 'key code 27 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "dance for me": "say \"No\"",
  "dehance": "osascript -e 'tell application \"System Events\"to repeat 2 times' -e 'key code 24 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "do awesome things": "say \"I'm afraid I can't do that dave\"",
  "free willy": "say \"FREEEEEEDOOOOM\"",
  "what time is it": "say $(date)",
  "check the": "open https://www.google.com/?gws_rd=ssl#q=<ARG del='+' case='upper' />",
  "kyle cho pro tip": "say kyle cho pro tip: $(cat protips.txt | perl -MList::Util=shuffle -e 'print shuffle(<STDIN>);' | head -n 1)",
  "dim screen": "osascript -e 'tell application \"System Events\" to repeat 10 times' -e 'key code 107' -e 'delay 0.1' -e 'end repeat'",
  "open": "open /Applications/<ARG del='\\ ' capitalize=true/>.app",
  "volume down": "osascript -e 'set volume 1'",
  "volume up": "osascript -e 'set volume 5'",
  "volume off": "osascript -e 'set volume 0'"
};