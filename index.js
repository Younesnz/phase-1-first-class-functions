function receivesAFunction(fun){
    fun();
}

function returnsANamedFunction(){
    const foo = function(){};
    return foo;
}

function returnsAnAnonymousFunction(){
    return ()=>"Re:Coded!";
}