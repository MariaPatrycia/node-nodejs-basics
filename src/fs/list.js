const list = async () => {
    // Write your code here 
    const list= async () => {
  const dirPath = path.join(__dirname, 'files');

  try {
    await fs.promises.access(dirPath, fs.constants.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }};

await list();
