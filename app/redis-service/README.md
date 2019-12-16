/api/getAll
    - returns a list of all keys in redis cache

/api/get?key={key}
    - returns value of key

/api/set?key={key}&value={value}
    - adds a new entry to redis cache if key does not exists
    - else edits existing entry

/api/clear
    - deletes all entries from redis cache

/api/delete?keys={keylist}
    - deletes list of keys form redis cache
    - keys should be delimited by ","

    