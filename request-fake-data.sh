#!/bin/bash

# May 19, 2015
# Victor Roemer <victor@badsec.org>
# Simple wrapper/client for my server data. Use 'jq' to pretty output.

(( $# >= 1 )) && COUNT=$1 || COUNT=1
curl --silent -G evilsec.org:3000/api/users?count=$COUNT | jq -M '.'
