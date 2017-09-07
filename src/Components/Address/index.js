// @flow
import React from 'react'

const Address = ({ address }: { address: Array<string> }) =>
  <div>
    {address.map(line =>
      <h2 key={line}>
        {line}
      </h2>
    )}
  </div>

export default Address
