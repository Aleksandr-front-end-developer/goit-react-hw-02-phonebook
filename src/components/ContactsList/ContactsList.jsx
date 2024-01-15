export const ContactsList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </>
  );
};
