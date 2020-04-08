module.exports = {
    d_ascii_array: array => String.fromCharCode(...array),
    d_utf8_array: array => String.fromCharCode(...array),
    d_base64: string => Buffer.from(string, "base64").toString(),
    d_hex: string => Buffer.from(string, "hex").toString(),
    d_bigint: bigint => {
        const int = BigInt(bigint)
        const buf = Buffer.from(int.toString(16), 'hex')
        return buf.toString()
    },
    d_rot13: string => {
        const n = 13
        const input = string
        const output = []

        for(let i=0; i<input.length; i++) {
        if (input.charCodeAt(i) >= 'A'.charCodeAt(0) && input.charCodeAt(i) <= 'Z'.charCodeAt(0))
            output[i] = ((input.charCodeAt(i) - 'A'.charCodeAt(0) + n) % 26) + 'A'.charCodeAt(0)
        else if (input.charCodeAt(i) >= 'a'.charCodeAt(0) && input.charCodeAt(i) <= 'z'.charCodeAt(0))
            output[i] = ((input.charCodeAt(i) - 'a'.charCodeAt(0) + n) % 26) + 'a'.charCodeAt(0)
        else
            output[i] = input.charCodeAt(i)
        }
        return String.fromCharCode(...output)
    },
    d_xor: (string, key) => {
        
        return String.fromCharCode(...string.split('').map(char => char.charCodeAt(0) ^ int))
    },
    d_xor_int: (string, int) => String.fromCharCode(...string.split('').map(char => char.charCodeAt(0) ^ int))
}