const create = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fresh.txt');};
     const fileExists = await fs.promises.access(filePath, fs.constants.F_OK).then(() => true).catch(() => false);

    if (fileExists) {
        throw new Error('FS operation failed');
    }
    await fs.promises.writeFile(filePath, 'I am fresh and young');
};await create();
