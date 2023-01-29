import { Fragment } from "react";
export const loaders = [
  {
    html: <div className="bt-spinner"></div>,
    css: `.bt-spinner {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background-color: transparent;
            border: 4px solid #222;
            border-top: 4px solid #03A9F4;
            -webkit-animation: 1s spin linear infinite;
            animation: 1s spin linear infinite;
        }
        
        @-webkit-keyframes spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
                  
        @keyframes spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }`,
  },
  { html: <div className="db-spinner"></div> ,
    css: `.db-spinner {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #222;
        border-top: 2px solid #03A9F4;
        border-bottom: 2px solid #03A9F4;
        -webkit-animation: 1s spin linear infinite;
        animation: 1s spin linear infinite;
    }
    
    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
              
    @keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    } `
},
{
    html:<Fragment>
        <div className="dbl-spinner"></div>
<div className="dbl-spinner"></div> 
    </Fragment>,
    css: `.dbl-spinner {
        position: absolute;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: transparent;
        border: 4px solid transparent;
        border-top: 4px solid #222;
        border-left: 4px solid #222;
        -webkit-animation: 2s spin linear infinite;
        animation: 2s spin linear infinite;
    }
                                          
    .dbl-spinner:nth-child(2) {
        border: 4px solid transparent;
        border-right: 4px solid #03A9F4;
        border-bottom: 4px solid #03A9F4;
        -webkit-animation: 1s spin linear infinite;
        animation: 1s spin linear infinite;
    }
    
    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
              
    @keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    `
},
{
    html:<div className="square-spinner"></div>,
    css: `      
    .square-spinner {
        width: 55px;
        display: block;
        background-color: #03A9F4;
        height: 55px;
        -webkit-animation: 3s rotate2 ease-in-out infinite;
        animation: 3s flip ease-in-out infinite;
    }
    
    @-webkit-keyframes flip {
        0% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        25% {
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
        }
        50% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
        }
        75% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(-180deg);
        transform: perspective(120px) rotateX(0deg) rotateY(-180deg);
        }
        100% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(-360deg);
        transform: perspective(120px) rotateX(0deg) rotateY(-360deg);
        }
    }
      
    @keyframes flip {
        0% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        25% {
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
        }
        50% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
        }
        75% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(-180deg);
        transform: perspective(120px) rotateX(0deg) rotateY(-180deg);
        }
        100% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(-360deg);
        transform: perspective(120px) rotateX(0deg) rotateY(-360deg);
        }
    }`},
    {
        html:<div className="nb-spinner"></div>,
        css : `.nb-spinner {
            width: 75pxx;
            height: 75px;
            margin: 0;
            background: transparent;
            border-top: 4px solid #03A9F4;
            border-right: 4px solid transparent;
            border-radius: 50%;
            -webkit-animation: 1s spin linear infinite;
            animation: 1s spin linear infinite;
        }
            
        @-webkit-keyframes spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
                  
        @keyframes spin {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }  `
    },
    {
        html:<div className="hm-spinner"></div>,
        css: `      
        .hm-spinner{
          height: 115px;
          width: 115px;
          border: 6px solid transparent;
          border-top-color: #9C27B0;
          border-bottom-color: #9C27B0;
          border-radius: 50%;
          position: relative;
          -webkit-animation: spin 3s linear infinite;
                  animation: spin 3s linear infinite;
        }
        
        .hm-spinner::before{
          content: "";
          position: absolute;
          top: 20px;
          right: 20px;
          bottom: 20px;
          left: 20px;
          border: 6px solid transparent;
          border-top-color: #BA68C8;
          border-bottom-color: #BA68C8;
          border-radius: 50%;
          -webkit-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite;
        }
        
        @-webkit-keyframes spin {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
        }
        
        @keyframes spin {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
        }
        `
    },
    {
        html:<div className="reverse-spinner"></div>,
        css:`.reverse-spinner {
            position: relative;
            height: 100px;
            width: 100px;
            border: 4px solid transparent;
            border-top-color: #1976d2;
            border-left-color: #1976d2;
            border-radius: 50%;
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
          }
          
          .reverse-spinner::before {
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            content: "";
            border: 4px solid transparent;
            border-top-color: #03a9f4;
            border-left-color: #03a9f4;
            border-radius: 50%;
            -webkit-animation: spinBack 1s linear infinite;
            animation: spinBack 1s linear infinite;
          }
          
          @-webkit-keyframes spin {
              from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
          }
          
          @keyframes spin {
              from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
          }
          
          
          @-webkit-keyframes spinBack {
              from {
                  -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
            }
            to {
                  -webkit-transform: rotate(-720deg);
                  transform: rotate(-720deg);
            }
          }
          
          @keyframes spinBack {
            from {
                  -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
            }
            to {
                  -webkit-transform: rotate(-720deg);
                  transform: rotate(-720deg);
            }
          }`,
    },
    {
        html: <div className="triple-spinner" />,
        css:`.triple-spinner {
            display: block;
            position: relative;
            width: 125px;
            height: 125px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top: 4px solid #FF5722;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
          }
          
          .triple-spinner::before,
          .triple-spinner::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            border: 4px solid transparent;
          }
          .triple-spinner::before {
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-top-color: #FF9800;
            -webkit-animation: spin 3s linear infinite;
            animation: spin 3.5s linear infinite;
          }
          .triple-spinner::after {
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-top-color: #FFC107;
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.75s linear infinite;
          }
               
          
          
          @-webkit-keyframes spin {
              from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
            }
            
          
          @keyframes spin {
              from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
              }
              to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
              }
            }
          `
    },
    {
        html:<div className="cm-spinner"></div>,
        css:`.cm-spinner {
            height: 150px;
            width: 150px;
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid #f15e41;
            -webkit-animation: spin 4s linear infinite;
            animation: spin 4s linear infinite;
            position: relative;
          }
          
          .cm-spinner::before,
          .cm-spinner::after {
            content: "";
            position: absolute;
            top: 6px;
            bottom: 6px;
            left: 6px;
            right: 6px;
            border-radius: 50%;
            border: 4px solid transparent;
          }
          
          .cm-spinner::before {
            border-top-color: #bad375;
            -webkit-animation: 3s spin linear infinite;
            animation: 3s spin linear infinite;
          }
          
          .cm-spinner::after {
            border-top-color: #26a9e0;
            -webkit-animation: spin 1.5s linear infinite;
            animation: spin 1.5s linear infinite;
          }   
                       
          @-webkit-keyframes spin {
              from {
                  -webkit-transform: rotate(0deg);
                   transform: rotate(0deg);
              }
              to {
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
              }
          }   
                  
          @keyframes spin {
              from {
                  -webkit-transform: rotate(0deg);
                  transform: rotate(0deg);
              }
              to {
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
              }
          }`
    },
    {
        html:<Fragment>
       <div className="dot-loader"></div>
<div className="dot-loader"></div>
<div className="dot-loader"></div>
    </Fragment>,
    css:`.dot-loader{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #03A9F4;
        position: relative;
        -webkit-animation: 1.2s scaleDown ease-in-out infinite ;
        animation: 1.2s scaleDown ease-in-out infinite ;
    }
    
    .dot-loader:nth-child(2){
        margin: 0 15px;
        -webkit-animation: 1.2s scaleDown ease-in-out infinite .15555s;
        animation: 1.2s scaleDown ease-in-out infinite .15555s;
    }
    
    .dot-loader:nth-child(3){
        -webkit-animation: 1.2s scaleDown ease-in-out infinite .300000s;
        animation: 1.2s scaleDown ease-in-out infinite .300000s;
    }
    
    @-webkit-keyframes scaleDown{
        0%, 80%, 100%{
          -webkit-transform: scale(0);
                  transform: scale(0);
        }
        40%{
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
    }
    
    @keyframes scaleDown{
        0%, 80%, 100%{
          -webkit-transform: scale(0);
                  transform: scale(0);
        }
        40%{
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
    }` 
    
    },
    {
        html:<div class="circle-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>,
    css:`.circle-loader {
        position: relative;
    
    }
    
    .circle-loader div {
        height: 10px;
        width: 10px;
        background-color: #03A9F4;
        border-radius: 50%;
        position: absolute;
        -webkit-animation: 1.3s opaque ease-in-out infinite both;
        animation: 1.3s opaque ease-in-out infinite both;
    }
    
    .circle-loader > div:nth-child(1) {
        top: -25px;
        left: 0;
    }
    
    .circle-loader > div:nth-child(2) {
        top: -17px;
        left: 17px;
        -webkit-animation-delay: .15s;
        animation-delay: .15s;
    }
    
    .circle-loader > div:nth-child(3) {
        top: 0;
        left: 25px;
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
    
    .circle-loader > div:nth-child(4) {
        top: 17px;
        left: 17px;
        -webkit-animation-delay: 0.45s;
        animation-delay: 0.45s;
    }
    
    .circle-loader > div:nth-child(5) {
        top: 25px;
        left: 0;
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
    }
    
    .circle-loader > div:nth-child(6) {
        top: 17px;
        left: -17px;
        -webkit-animation-delay: 0.75s;
        animation-delay: 0.75s;
    }
    
    .circle-loader > div:nth-child(7) {
        top: 0;
        left: -25px;
        -webkit-animation-delay: .9s;
        animation-delay: .9s;
    }
    
    .circle-loader > div:nth-child(8) {
        top: -17px;
        left: -17px;
        -webkit-animation-delay: 1.05s;
        animation-delay: 1.05s;
    }
    
    @-webkit-keyframes opaque {
        0%, 40%, 100% {
          opacity: 0.1;
        }
        40% {
          opacity: 1;
        }
    }
    
    @keyframes opaque {
        0%, 40%, 100% {
          opacity: 0.1;
        }
        40% {
          opacity: 1;
        }
    }`
    },
    {
        html:<div className="cl-loader"></div>,
        css:`
        .cl-loader  {
          animation: rotate 1s infinite;  
          height: 50px;
          width: 50px;
        }
        
        .cl-loader:before,
        .cl-loader:after {   
          border-radius: 50%;
          content: '';
          display: block;
          height: 20px;  
          width: 20px;
        }
        .cl-loader:before {
          animation: ball1 1s infinite;  
          background-color: #cb2025;
          box-shadow: 30px 0 0 #f8b334;
          margin-bottom: 10px;
        }
        .cl-loader:after {
          animation: ball2 1s infinite; 
          background-color: #00a096;
          box-shadow: 30px 0 0 #97bf0d;
        }
        
        @keyframes rotate {
          0% { 
            -webkit-transform: rotate(0deg) scale(0.8); 
            -moz-transform: rotate(0deg) scale(0.8);
          }
          50% { 
            -webkit-transform: rotate(360deg) scale(1.2); 
            -moz-transform: rotate(360deg) scale(1.2);
          }
          100% { 
            -webkit-transform: rotate(720deg) scale(0.8); 
            -moz-transform: rotate(720deg) scale(0.8);
          }
        }
        
        @keyframes ball1 {
          0% {
            box-shadow: 30px 0 0 #f8b334;
          }
          50% {
            box-shadow: 0 0 0 #f8b334;
            margin-bottom: 0;
            -webkit-transform: translate(15px,15px);
            -moz-transform: translate(15px, 15px);
          }
          100% {
            box-shadow: 30px 0 0 #f8b334;
            margin-bottom: 10px;
          }
        }
        
        @keyframes ball2 {
          0% {
            box-shadow: 30px 0 0 #97bf0d;
          }
          50% {
            box-shadow: 0 0 0 #97bf0d;
            margin-top: -20px;
            -webkit-transform: translate(15px,15px);
            -moz-transform: translate(15px, 15px);
          }
          100% {
            box-shadow: 30px 0 0 #97bf0d;
            margin-top: 0;
          }
        }`
    },
    {
        html:<div class="ml-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>,
    css: `.ml-loader {
        position: relative;
        width: 70px;
        height: 70px;
      }
      
      .ml-loader div {
        -webkit-transform-origin: 32px 32px;
            -ms-transform-origin: 32px 32px;
                transform-origin: 32px 32px;
        -webkit-animation: 1.2s opaque ease-in-out infinite both;
                animation: 1.2s opaque ease-in-out infinite both;
      }
      
      .ml-loader div::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 30px;
        width: 5px;
        height: 18px;
        border-radius: 10px;
        background-color: #03A9F4;
      }
      
      .ml-loader div:nth-child(1) {
        -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
                transform: rotate(0);
      }
      .ml-loader div:nth-child(2) {
        -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
                transform: rotate(30deg);
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s;
      }
      .ml-loader div:nth-child(3) {
        -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
                transform: rotate(60deg);
        -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s;
      }
      .ml-loader div:nth-child(4) {
        -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
                transform: rotate(90deg);
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
      }
      .ml-loader div:nth-child(5) {
        -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
                transform: rotate(120deg);
        -webkit-animation-delay: 0.4s;
                animation-delay: 0.4s;
      }
      .ml-loader div:nth-child(6) {
        -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
                transform: rotate(150deg);
        -webkit-animation-delay: 0.5s;
                animation-delay: 0.5s;
      }
      .ml-loader div:nth-child(7) {
        -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
                transform: rotate(180deg);
        -webkit-animation-delay: 0.6s;
                animation-delay: 0.6s;
      }
      .ml-loader div:nth-child(8) {
        -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
                transform: rotate(210deg);
        -webkit-animation-delay: 0.7s;
                animation-delay: 0.7s;
      }
      .ml-loader div:nth-child(9) {
        -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
                transform: rotate(240deg);
        -webkit-animation-delay: 0.8s;
                animation-delay: 0.8s;
      }
      .ml-loader div:nth-child(10) {
        -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
                transform: rotate(270deg);
        -webkit-animation-delay: 0.9s;
                animation-delay: 0.9s;
      }
      .ml-loader div:nth-child(11) {
        -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
                transform: rotate(300deg);
        -webkit-animation-delay: 1s;
                animation-delay: 1s;
      }
      .ml-loader div:nth-child(12) {
        -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
                transform: rotate(330deg);
        -webkit-animation-delay: 1.1s;
                animation-delay: 1.1s;
      }
      .ml-loader div:nth-child(13) {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
                transform: rotate(360deg);
        -webkit-animation-delay: 1.2s;
                animation-delay: 1.2s;
      }
      
      @-webkit-keyframes opaque {
          0%, 40%, 100% {
            opacity: 0.1;
          }
          40% {
            opacity: 1;
          }
      }
      
      @keyframes opaque {
          0%, 40%, 100% {
            opacity: 0.1;
          }
          40% {
            opacity: 1;
          }
      }
      `
    },
    {
        html:<div className="triforce-container">
        <div className="triforce"></div>
    </div>,
    css: `.triforce-container {
        width: 100px;
        height: 100px;
        position: relative;
        margin: 120px auto;
      }
      .triforce,
      .triforce::before,
      .triforce::after {
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 50px solid #ceb502;
        position: relative;
        -webkit-animation: 3s triforce linear infinite 2s both;
                animation: 3s triforce linear infinite 2s both;
        top: 50px;
      }
      
      .triforce::before,
      .triforce::after {
        content: "";
        position: absolute;
      }
      
      .triforce::before {
        left: 25px;
        top: 0;
        -webkit-animation-delay: 1s;
                animation-delay: 1s;
      }
      
      .triforce::after {
        top: -50px;
        -webkit-animation-delay: 0s;
                animation-delay: 0s;
      }
      
      @-webkit-keyframes triforce {
          0%, 40%, 100% {
            border-bottom-color: rgb(206, 181, 2);
          }
          40% {
            border-bottom-color: rgba(206, 181, 2, 0);
          }
        }
      
      @keyframes triforce {
          0%, 40%, 100% {
            border-bottom-color: rgb(206, 181, 2);
          }
          40% {
            border-bottom-color: rgba(206, 181, 2, 0);
          }
        }
      `
    }
];
