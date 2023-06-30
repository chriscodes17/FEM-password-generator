export default function GenerateButton({ val, handleSubmit }) {
  return (
    <button className="submit-btn" disabled={val === 0} onClick={handleSubmit}>
      GENERATE
      <span>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </span>
    </button>
  );
}
