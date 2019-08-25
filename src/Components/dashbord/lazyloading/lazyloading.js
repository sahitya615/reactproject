import React,{Component,lazy,Suspense} from 'react'
const Lazychild=lazy(()=>import('./lazychild'))

class lazyloading extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>

                <h1>exampl of lazy Loading</h1>
                <Suspense fallback={<div>Loading......</div>}>
                    <Lazychild />

                  </Suspense>
            </div>
        )
    }

}
export default lazyloading;