{
  class ReadOnlyProperty {
    readonly zero = 0
    one = 1
  }

  const instance = new ReadOnlyProperty()
  console.log(instance.zero)
  // instance.zero = 100 // Error
}
