import {ImageResponse} from 'next/og';
export const alt='Distrito Creativo — Agencia de contenidos digitales';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',background:'#111111',color:'#fff',width:'100%',height:'100%',padding:70}}><div style={{display:'flex',fontSize:36,color:'#ffcc00'}}>Distrito Creativo</div><div style={{display:'flex',fontSize:84,fontWeight:700,lineHeight:1.05,maxWidth:1000}}>Contenido que mueve marcas.</div><div style={{display:'flex',fontSize:25}}>Estrategia · Contenido · Audiovisual · Meta Ads</div></div>,size);}
