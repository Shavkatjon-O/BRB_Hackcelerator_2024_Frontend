import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-60 p-4 border-r border-gray-300 h-screen">
      <ul className='block space-y-4'>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Settings</Link></li>
        <li><Link href="#">Profile</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
 