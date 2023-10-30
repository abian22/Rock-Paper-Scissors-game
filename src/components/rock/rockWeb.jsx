import React from 'react'

function RockWeb() {
  return (
   <>
    <div
            style={{
              width: "200px",
              height: "180px",
              border: "20px solid transparent",
              borderRadius: "50%",
              backgroundColor: "white",
              marginTop: "-10px",
              backgroundImage:
              " linear-gradient(90deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
              backgroundOrigin: " border-box",
              boxShadow: "inset 0 100vw white",
            }}
          >
            <img
              src={"/images/icon-rock.svg"}
              style={{ marginLeft: "52px", marginTop: "45px", width:"80px"}}
            />
          </div>
   </>
  )
}

export default RockWeb