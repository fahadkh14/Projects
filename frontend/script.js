const API_URL = '/api/notes';
const form = document.getElementById('note-form');
const notesContainer = document.getElementById('notes-container');

// Fetch and display notes
async function fetchNotes() {
    try {
        const res = await fetch(API_URL);
        const notes = await res.json();
        notesContainer.innerHTML = '';
        
        notes.forEach(note => {
            const card = document.createElement('div');
            card.classList.add('note-card');
            card.innerHTML = `
                <div>
                    <h3>${escapeHTML(note.title)}</h3>
                    <p>${escapeHTML(note.content)}</p>
                </div>
                <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
            `;
            notesContainer.appendChild(card);
        });
    } catch (err) {
        console.error('Error fetching notes:', err);
    }
}

// Add a note
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        });
        form.reset();
        fetchNotes();
    } catch (err) {
        console.error('Error adding note:', err);
    }
});

// Delete a note
async function deleteNote(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchNotes();
    } catch (err) {
        console.error('Error deleting note:', err);
    }
}

// Basic utility to prevent XSS injection
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Load notes on initialization
fetchNotes();
