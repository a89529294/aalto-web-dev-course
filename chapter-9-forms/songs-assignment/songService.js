const addSong = async (song) => {
  const kv = await Deno.openKv();
  await kv.set(["songs", song["song-name"]], song);
};

const listSongs = async () => {
  const kv = await Deno.openKv();
  const songsData = await kv.list({ prefix: ["songs"] });

  const songs = [];
  for await (const entry of songsData) {
    if (entry != null && entry.value != null) {
      songs.push(entry.value);
    }
  }

  return songs;
};

export { addSong, listSongs };
