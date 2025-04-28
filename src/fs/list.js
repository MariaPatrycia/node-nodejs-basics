const list = async () => {
    // Write your code here 
    const list= async () => {
  const path = path.join(__dirname, 'files');

  try {
    await fs.promises.accessp (path, fs.constants.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }};

await list();
