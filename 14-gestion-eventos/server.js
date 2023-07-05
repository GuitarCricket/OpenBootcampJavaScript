const { exec } = require('child_process');

const rootDirectory = './';


const port = 3000;


const command = `http-server ${rootDirectory} -p ${port}`;


const child = exec(command);


child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
