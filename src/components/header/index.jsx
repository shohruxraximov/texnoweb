import React from 'react'
import Header from './header'
import MobileHeader from './MobileHeader'
import Block from './block'
import Block2 from './block2'
import CatalogMenu from "./catalogMenu"
export default function index() {
  return (
    <div>
      <><Header></Header>
      <MobileHeader></MobileHeader>
      <Block></Block>
       <CatalogMenu></CatalogMenu>
      </>
    </div>
  )
}
