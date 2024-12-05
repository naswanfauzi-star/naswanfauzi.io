  document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah refresh halaman

        // Ambil nilai dari input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi sederhana
        if (name && email && message) {
            // Buat elemen baru untuk komentar
            const comment = document.createElement('div');
            comment.classList.add('mb-4', 'p-3', 'border', 'rounded');
            comment.innerHTML = `
                <strong>${name}</strong> (${email})<br>
                <p>${message}</p>
            `;

            // Tambahkan ke daftar komentar
            document.getElementById('commentsList').appendChild(comment);

            // Reset form
            document.getElementById('contactForm').reset();
        } else {
            alert('Please fill out all fields!');
        }
    });

