import('./sub').then((module)=>{
    const hello = module.default
    hello()
})