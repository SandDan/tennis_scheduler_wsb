import React, {useState} from 'react';

function Schedule() {
    const [availableSlots, setAvailableSlots] = useState(['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']);
    const [bookedslot, setBookedSlot] = useState(null);

    const bookSlot = (slot) => {
        setBookedSlot(slot);
        alert("You have booked a lesson at ${slot}");
    };
    return (
        <div className='schedule'>
            <h2>Available Slots</h2>
            <ul>
                {availableSlots.map((slot, index) =>
                <li key={index}>
                    <button onClick={() => bookSlot(slot)}>{slot}</button>
                </li>
                )}
            </ul>
            {bookedslot && <p>Lesson booked at: {bookedslot}</p>}
        </div>
    );
}
export default Schedule;