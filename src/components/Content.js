const Content = () => {
    const handleNameChange = () => {
        const names = ['Sachin', 'Thakur', 'Suraj', 'Jeet', 'Smaran', 'Durgesh']
        const int = Math.floor(Math.random() * 6);
        console.log(int)
        return names[int];
      }
  return (
    <main>
        <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Content;
