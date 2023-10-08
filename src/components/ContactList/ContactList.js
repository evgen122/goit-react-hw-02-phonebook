import { ItemContact } from 'components/ItemContact/ItemContact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(i => (
        <li key={i.id}>
          <ItemContact item={i} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
