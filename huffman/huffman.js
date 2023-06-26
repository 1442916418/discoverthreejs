// 定义节点类
class Node {
  constructor(char, freq) {
    this.char = char // 字符
    this.freq = freq // 频率
    this.left = null // 左子节点
    this.right = null // 右子节点
  }
}

// 构建霍夫曼树
function buildHuffmanTree(freqMap) {
  // 创建叶节点列表
  const nodes = []
  for (const [char, freq] of freqMap.entries()) {
    const node = new Node(char, freq)
    nodes.push(node)
  }

  while (nodes.length > 1) {
    // 按频率升序排序
    nodes.sort((a, b) => a.freq - b.freq)

    // 取出最小频率的两个节点作为左右子节点
    const left = nodes.shift()
    const right = nodes.shift()

    // 创建新节点作为父节点，频率为左右子节点频率之和
    const parent = new Node(null, left.freq + right.freq)
    parent.left = left
    parent.right = right

    // 将新节点放入列表中
    nodes.push(parent)
  }

  // 返回霍夫曼树的根节点
  return nodes[0]
}

// 生成霍夫曼编码表
function generateHuffmanCodes(root) {
  const codes = new Map()

  // 递归遍历霍夫曼树生成编码
  function traverse(node, code) {
    if (node.char) {
      // 叶节点，保存字符对应的编码
      codes.set(node.char, code)
    } else {
      // 非叶节点，继续递归遍历左右子树
      traverse(node.left, code + '0')
      traverse(node.right, code + '1')
    }
  }

  // 从根节点开始遍历生成编码
  traverse(root, '')

  // 返回编码表
  return codes
}

// 压缩数据
function compressData(data, codes) {
  let compressedData = ''
  for (const char of data) {
    compressedData += codes.get(char)
  }
  return compressedData
}

// 解压数据
function decompressData(compressedData, root) {
  let decompressedData = ''
  let currentNode = root
  for (const bit of compressedData) {
    if (bit === '0') {
      currentNode = currentNode.left
    } else if (bit === '1') {
      currentNode = currentNode.right
    }

    if (currentNode.char) {
      decompressedData += currentNode.char
      currentNode = root
    }
  }
  return decompressedData
}

// 示例数据
const data = 'hello world'

// 统计字符频率
const freqMap = new Map()
for (const char of data) {
  if (freqMap.has(char)) {
    freqMap.set(char, freqMap.get(char) + 1)
  } else {
    freqMap.set(char, 1)
  }
}

debugger
// 构建霍夫曼树
const root = buildHuffmanTree(freqMap)
console.log('🚀 ~ file: huffman.js:107 ~ root:', root)

// 生成霍夫曼编码表
const codes = generateHuffmanCodes(root)
console.log('🚀 ~ file: huffman.js:111 ~ codes:', codes)

// 压缩数据
const compressedData = compressData(data, codes)
console.log('🚀 ~ file: huffman.js:115 ~ compressedData 压缩数据:', compressedData)

// 解压数据
const decompressedData = decompressData(compressedData, root)
console.log('🚀 ~ file: huffman.js:120 ~ decompressedData 解压数据:', decompressedData)
