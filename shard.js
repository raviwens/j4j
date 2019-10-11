const { ShardingManager } = require("discord.js");
const shard = new ShardingManager("./pingBot.js", {
  token: "NjMwMzE4Mjg1OTE2ODY0NTEy.XZmj0Q.9pEGtFJ4n_WpOVnJCFYv6GmeXOM",
  autoSpawn: true
});
shard.spawn(2);


shard.on("launch", shard =>
  console.log(`[PING] Shard Başladı: ${shard.id}/${shard.manager.totalShards}`)
);
