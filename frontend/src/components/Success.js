import React from 'react'

export default function Success({msg}) {
    return (
        <div className="alert alert-success" role="alert">
            {msg}
        </div>
    )
}
