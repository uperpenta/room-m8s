export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-center  bg-bluey">
      <div className="flex items-center justify-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Room M8s. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
