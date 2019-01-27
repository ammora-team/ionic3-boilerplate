#!//bin/bash
cd platforms/ios

if [ -e "./Podfile" ]; then
    pod update
fi
