const getVisits = async () => {
  const kv = await Deno.openKv();
  const count = await kv.get(["visits"]);
  console.log(count.value);

  if (count.value === null) {
    await kv.set(["visits"], 0);
    return 0;
  }

  return count.value;
};

const incrementVisits = async () => {
  const kv = await Deno.openKv();
  const count = await kv.get(["visits"]);
  console.log(count.value);

  if (count.value === null) {
    await kv.set(["visits"], 1);
  } else {
    await kv.set(["visits"], count.value + 1);
  }
};

const resetVisits = async () => {
  const kv = await Deno.openKv();
  await kv.delete(["visits"]);
};

export { getVisits, incrementVisits, resetVisits };
