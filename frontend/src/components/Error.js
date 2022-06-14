import React from 'react'

export default function Error({errmsg}) {
    return (
        <div className="alert alert-warning mt-2" role="alert">
            {errmsg}
        </div>
    )
}
