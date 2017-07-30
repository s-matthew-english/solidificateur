# Solidificateur

Contract looks like this: 

```javascript
pragma solidity ^0.4.13;

// This contract demonstrates a simple non-constant (transactional) function you can call from geth.
// increment() takes no parameters and merely increments the "iteration" value. 

contract Incrementer {
    uint iteration;

    function Incrementer() {
        iteration = 0;
    }

    function increment(uint count) {
        iteration += count;
    }
    
    function getIteration() constant returns (uint) {
        return iteration;
    }
    
}
```

Compile and deploy to `testrpc` via `truffle` with the following commands: 

```javascript
truffle compil --all 
truffle migrate --reset
```

Increase the `iteration` variable: 

```javascript
Incrementer.deployed().then(function(instance) {
      meta = instance;
      return meta.increment(1);
    })
```






Verify the result: 
```javascript
Incrementer.deployed().then(function(instance) { meta = instance; return meta.getIteration(); })
```
