function AddressInput() {
  return (
    <div className="form-group">
      <p className="form-text text-muted">
        Where do you want your robot shipped?
      </p>
      <input
        className="form-control"
        type="text"
        id="address"
        name="address"
        placeholder="Shipping address"
        required
      />
    </div>
  )
}

export default AddressInput
