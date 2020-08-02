# Stops a server by the port it's listening to
# Usage: sh kill.sh [PORT]
# Example: kill -9 $(lsof -t -i:5000 -sTCP:LISTEN)
echo 'Kill server'
kill -9 $(lsof -t -i:$1 -sTCP:LISTEN)
echo 'Done.'
