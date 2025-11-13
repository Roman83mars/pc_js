const sendForm = () => {
    const form = document.querySelector('.modal')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const text = form.querySelector('input[type=text')
        const tel = form.querySelector('input[type=tel')
        const email = form.querySelector('input[type=email')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value,
        }

        if (form) {
            let formData = new FormData(form);
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`1+${response.status}`)
                }
                return response.json()
            })
            .then((json) => console.log(json))
            .then(text.value = '',
                tel.value = '',
                email.value = '',
                alert('Данные успешно отправлены!')
            )
            .catch((err) => alert(`Не удалось отправить Ваши данные. Ошибка: ${err}`))
    })
}

sendForm()