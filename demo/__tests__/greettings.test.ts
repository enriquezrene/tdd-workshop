import Greetings from '../greettings'

test('Should say hi+name', () => {
    const name = 'Rene'

    const helloMessage = Greetings.sayHi(name)

    expect(helloMessage).toEqual('Hi Rene')
})