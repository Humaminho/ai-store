import { useState } from 'react'

export default function Newsletter() {

  const [input, setInput] = useState("")

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setInput('');
  }
  return (
		<section className="section newsletter-section">
			<h2>Join our newsletter</h2>
			<p>
				Be the first to know about our latest products, exclusive
				offers, and events
			</p>
			<form
				className="newsletter-form"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					type="email"
					name="email"
					id="newsletter-email"
					value={input}
					placeholder="fashion@enjoyer.com..."
          onChange={(e) => {
            setInput(e.target.value)
          }}
				/>
				<button
					className="button button-full newsletter-button"
					onClick={handleClick}
				>
					<p>Sign-up</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-send"
						viewBox="0 0 16 16"
					>
						<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
					</svg>
				</button>
			</form>
		</section>
  );
}
