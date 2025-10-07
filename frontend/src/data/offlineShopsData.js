// Simulates affiliated offline pharmacies and their inventory
export const offlineShopsData = [
    {
        id: 'shop-01',
        name: 'Apollo Pharmacy',
        location: 'Connaught Place, New Delhi',
        affiliatedHospital: 'City General Hospital',
        phone: '+919876543210',
        timings: 'Open 24 Hours',
        inventory: ['med-001', 'med-002'], // Medicine IDs they stock
        // NEW: Image added for the shop
        image: 'https://images.unsplash.com/photo-1576683567339-3395d8ab2b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'shop-02',
        name: 'Wellness Forever',
        location: 'Gurugram, Sector 29',
        affiliatedHospital: 'Apollo Spectra',
        phone: '+919123456789',
        timings: '8:00 AM - 11:00 PM',
        inventory: ['med-003', 'med-001'],
        // NEW: Image added for the shop
        image: 'https://images.unsplash.com/photo-1621593358986-a703c4f21802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
        id: 'shop-03',
        name: 'Garg Dawa Bazaar',
        location: 'Karol Bagh, New Delhi',
        affiliatedHospital: 'City General Hospital',
        phone: '+919988776655',
        timings: '9:00 AM - 10:00 PM',
        inventory: ['med-002'],
        // NEW: Image added for the shop
        image: 'https://images.unsplash.com/photo-1555994222-ac2938a2e128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
];