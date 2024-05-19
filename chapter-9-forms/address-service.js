const addAddress = async (addressData) => {
  const kv = await Deno.openKv();
  await kv.set(["addresses", addressData.name], addressData);
};

const listAddresses = async () => {
  const kv = await Deno.openKv();
  const addressData = kv.list({ prefix: ["addresses"] });
  const addresses = [];
  for await (const entry of addressData) {
    if (entry != null && entry.value != null) {
      addresses.push(entry.value);
    }
  }

  return addresses;
};

export { addAddress, listAddresses };
