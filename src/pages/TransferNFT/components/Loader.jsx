import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Loader(props) {
    console.log(props.className)
    return <div class={`lds-ellipsis ${props.className ? props.className : ''}`}><div></div><div></div><div></div><div></div></div>
}