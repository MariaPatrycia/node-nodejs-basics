const remove = async () => {
    // Write your code here 
  const sourcePath = path.join(__dirname, 'wrongFilename.txt');
  const targetPath = path.join(__dirname, 'properFilename.md');};
 try {
    await fs.promises.access(sourceFilePath, fs.constants.F_OK);
  } catch {
    throw new Error('FS operation failed');
  }
await remove();
