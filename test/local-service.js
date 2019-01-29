// const childProcess = require('child_process');

// module.exports = class LocalService {
//   constructor(modulePath) {
//     this.modulePath = modulePath;
//     this.process = null;
//   }

//   async start() {
//     this.process = await LocalService.startChildProcess(this.modulePath);
//     return this.process;
//   }

//   async kill() {
//     await LocalService.killChildProcess(this.process);
//   }

//   static async startChildProcess(moduleFilePath) {
//     await (() => {
//       const child = childProcess.fork(moduleFilePath);
//       child.on('message', ((message) => {
//         if (message === 'Success, server started') {
//           // child;
//         }
//       }));

//       child.on('error', (err) => {
//         console.error('service error');
//         err;
//       });

//       child.on('close', ((code) => {
//         console.log(code);
//       }));
//     });
//   }

//   static async killChildProcess(proc) {
//     if (proc) {
//       proc.once('close', (code) => {
//         console.log(code);
//       });
//       proc.kill('SIGINT');
//     }
//   }
// };
