const hex_string = process.argv[2]
const buf = Buffer.from(hex_string, 'hex')

console.log(buf.toString('base64'))
