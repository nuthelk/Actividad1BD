& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --shardsvr--port 26017 --dbpath "C:\shard_data\shard1\data" --replSet shard1_replset
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --shardsvr--port 27017 --dbpath "C:\shard_data\shard2\data" --replSet shard2_replset
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --shardsvr--port 28017 --dbpath "C:\shard_data\shard3\data" --replSet shard3_replset


mongosh --host <hostName> --port <port>

rs.initiate({
    _id: "shard1_replset",
    members: [
        { _id: 0, host: "localhost:26017" }
    ]
})

rs.initiate({
    _id: "shard2_replset",
    members: [
        { _id: 0, host: "localhost:27017" }
    ]
})

rs.initiate({
    _id: "shard3_replset",
    members: [
        { _id: 0, host: "localhost:28017" }
    ]
})

rs.status() // para pruebas