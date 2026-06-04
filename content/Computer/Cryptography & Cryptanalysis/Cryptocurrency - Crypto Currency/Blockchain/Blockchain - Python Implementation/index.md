---
title: "Blockchain - Python Implementation"
created: 2021-12-03T18:27:04.549-06:00
modified: 2021-12-04T04:21:52.931-06:00
parent: "[[Blockchain]]"
children: []
---
# Things to Note
- The <code>timestamp</code> of every transaction in a block is the same as the block itself. All transactions in a block have the same timestamp. The timestamp is written by the miner that finds the block hash for that block
- Transactions do not have timestamps, so the timestamp that [blockchain.info](http://blockchain.info) displays is whatever time their node received the transaction. The time shown will also change to the time that it was included in a block. In general, it is not reliable to trust the timestamp given for an unconfirmed transaction on [blockchain.info](http://blockchain.info) as it is entirely dependent on their node

# Client Class
```py
class Client:
	def __init__(self):
		random = Crypto.Random.new().read
		self._private_key = RSA.generate(1024, random)
		self._public_key = self._private_key.publickey()
		self._signer = PKCS1_v1_5.new(self._private_key)

	@property
	def public_key(self):
		return binascii.hexlify(self._public_key.exportKey(format='DER')).decode('ascii')

 	def sign_transaction(self, transaction):
		hash_value = sha256(str(transaction.to_dict())
		signature = self._signer.sign(hash_value)
		transaction.signature = binascii.hexlify(signature).decode('ascii')
```

> [!expand]- use case
> <span style="white-space: pre-wrap"><code>marcus = Client()</code><br><code>print(marcus.public\_key)</code><br><code></code><br><code>\# output</code><br><code>30819f300d06092a864886f70d010101050003818d0030818902818100b547fafceeb131e07</code><br><code>0166a6b23fec473cce22c3f55c35ce535b31d4c74754fecd820aa94c1166643a49ea5f49f72</code><br><code>3181ff943eb3fdc5b2cb2db12d21c06c880ccf493e14dd3e93f3a9e175325790004954c34d3</code><br><code>c7bc2ccc9f0eb5332014937f9e49bca9b7856d351a553d9812367dc8f2ac734992a4e6a6ff6</code><br><code>6f347bd411d07f0203010001</code></span>
# Transaction Class
```py
class Transaction:
	def __init__(self, sender_public_key, recipient_public_key, value):
		self.sender_public_key = sender_public_key
		self.recipient_public_key = recipient_public_key
		self.value = value
		self.signature = None

	def to_dict(self):
		return collections.OrderedDict({
			'sender': self.sender_public_key if self.sender_public_key != "Genesis" else "Genesis",
			'recipient': self.recipient_public_key,
			'value': self.value})
```
# Transaction - Origination & Signature
```
marcus = Client()
john = Client()

# transaction origination
t = Transaction(marcus, john.public_key, 5.0)

# transaction signature
marcus.sign_transaction(t)

print(t.signature)
# output
7c7e3c97629b218e9ec6e86b01f9abd8e361fd69e7d373c38420790b655b9abe3b575e343c7
13703ca1aee781acd7157a0624db3d57d7c2f1172730ee3f45af943338157f899965856f6b0
0e34db240b62673ad5a08c8e490f880b568efbc36035cae2e748f1d802d5e8e66298be826f5
c6363dc511222fb2416036ac04eb972
```
# Global - Clients & Transactions
```py
marcus = Client()
john = Client()
jesus = Client()

# global variable to hold transactions created overtime
transactions = []

# Add new transactions overtime
t1 = Transaction(marcus.public_key, john.public_key, 5.0)	# create a transaction
marcus.sign_transaction(t1)									# marcus signs the transaction assuming marcus agrees with it
transactions.apend(t1)										# append signed transaction to global variable

t2 = Transaction(marcus.public_key, jesus.public_key, 15.0)	# create a transaction
marcus.sign_transaction(t2)									# marcus signs the transaction assuming marcus agrees with it
transactions.apend(t2)										# append signed transaction to global variable

t3 = Transaction(jesus.public_key, marcus.public_key, 99.0)	# create a transaction
jesus.sign_transaction(t3)									# jesus signs the transaction assuming jesus agrees with it
transactions.apend(t3)										# append signed transation to global variable

...
```
# Block Class
```py
class Block:
	def __init__(self):
	  	self.previous_block_hash = ""
		self.verified_transactions = []
 		self.nonce = 0

	def get_values_to_hash(self):
		return str(self.previous_block_hash)
			+ str(merkle_root(self.verified_transactions))
			+ str(nonce)
```
# Global - Last Block Hash
```py
# global variable holding the hash-value of the last block in the blockchain
last_block_hash = ""
```
# Global - Genesis Block
```py
# genesis transaction
t0 = Transaction("Genesis", marcus.public_key, 500.0)

# genesis block
block0 = Block()
block0.previous_block_hash = last_block_hash
block0.verified_transactions.append(t0)
block0.nonce = 0

last_block_hash = sha256(block0.get_values_to_hash())
```
# Global - Blockchain
```py
# contains a list of blocks chained to each other
blockchain = []

# append genesis block
blockchain.append(block0)
```
# Mining
```py
def mine(block, difficulty=1):
	assert difficulty >= 1
	prefix = '0' * difficulty
	for i in range(sys.maxint):
		block.nonce = block.nonce + 1
		hash_value = sha256(block.get_values_to_hash())
		if hash_value.startswith(prefix):
			return
```

> [!expand]- use case
> <span style="white-space: pre-wrap"><code>mine(block0, 2)</code></span>
# Global - Adding a new Block to Blockchain
```py
# global variable to store the next transaction to be processed
last_transaction_index = 0
```
```py
# initialize new block
block = Block()

# link the hash-value of the last block in the blockchain
block.previous_block_hash = last_block_hash

# add the next 3 valid transactions into the block
for i in range(3):
	temp_transaction = transactions[last_transaction_index]
	if is_transaction_valid(temp_transaction):
		block.verified_transactions.append(temp_transaction)
	last_transaction_index += 1

# add own coinbase transaction into block
coinbase_transaction = Transaction("Genesis", miners.public_key, block_subsidy)
block.verified_transactions.append(coinbase_transaction

# mine the block
mine(block, 2)

# add block to own blockchain
blockchain.append(block)
# broadcast block to all miners
broadcast(block)
```
# Transaction - Verification
```
def is_transaction_valid(transaction):
	# check if transaction.sender has enough funds to send transaction.value
	# check if transaction.signature is valid
	# return true if all conditions passes
```
# Block - Verification

When another node successfully mined a block before you did, that will broadcast to us and upon receiving it we validate its Proof of Work (PoW)
```
def validate_block(block, difficulty=1):
	assert difficulty >= 1
	prefix = '0' * difficulty

	assert block.previous_block_hash == last_block_hash
	assert sha256(block.get_values_to_hash()).startswith(prefix)
	for t in block.verified_transactions:
		assert is_transaction_valid(t)

	last_block_hash = sha256(block.get_values_to_hash())
```
# Resources
- [https://www.tutorialspoint.com/python_blockchain/index.htm](https://www.tutorialspoint.com/python_blockchain/index.htm)
