import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import vaildation from "./PhoneBookValidation"
import View from "./View"
import axios from "axios"

function PhoneBook() {
  const [values, setValues] = useState([])
  const navigate = useNavigate()
  const [errors, seterrors] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://phone.pinodev.shop:8000/api/phone",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          },
        )
        setValues(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    seterrors(vaildation(values))
    if (errors.name === "" && errors.number === "") {
      axios
        .post("http://phone.pinodev.shop:8000/api/phone", {
          name: values.name,
          number: values.number,
        })
        .then((res) => {
          navigate("/phonebook")
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }

  const deletenum = () => {
    axios
      .delete(`http://phone.pinodev.shop:8000/api/phone/${idx}`)
      .then((res) => {
        setValues(...(prev) => prev.filter((value) => value.idx !== idx))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    <div className="wrapper">
      <h1>PhoneBook</h1>
      <p>Add Friends</p>
      <div className="main">
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <br />
            <input
              type="name"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              onChange={handleInput}
            />
            {errors.name && <span id="text-danger">{errors.name}</span>}
            <br />
            <br />
            <label htmlFor="number">
              <strong>Number</strong>
            </label>
            <br />
            <input
              className="form-control"
              placeholder="Enter Number"
              name="number"
              onChange={handleInput}
            />
            {errors.number && <span number="text-danger">{errors.number}</span>}
            <br />
            <br />
            <button
              className="btn btn-success btn-md"
              type="submit"
              onClick={handleSubmit}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="view-container">
          {values.length > 0 ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {values.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.number}</td>
                      <td>
                        <button onClick={() => deletenum(item.idx)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No numbers are added yet</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PhoneBook
