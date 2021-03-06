const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

export const ColumnContainer = ({ children }) => (
  <div style={containerStyle}>
    { children }
  </div>
)

const mainStyle = {
  flex: 1,
  overflowY: 'auto',
}

export const ColumnMain = ({ children }) => (
  <div style={mainStyle}>
    { children }
  </div>
)
