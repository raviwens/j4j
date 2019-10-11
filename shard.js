
const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./pingBot.js', {
  token: "NjMwMzE4Mjg1OTE2ODY0NTEy.XZmj0Q.9pEGtFJ4n_WpOVnJCFYv6GmeXOM",
  autoSpawn: 1,
  totalShards: 1
});
shard.spawn(2);
shard.on('shardCreate', (shard) => {
    console.log(`Successfully launched shard #${shard.id} (${+shard.id+1}/${shard.manager.totalShards})`);
});

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.manager.totalShards}`));
