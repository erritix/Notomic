package markdown

import (
	"context"
	"errors"
	"fmt"
	"os"
	"path/filepath"
)

const TESTFS = "./testfs"

type Markdown struct {
	ctx context.Context
}

func NewMarkdown() *Markdown {
	return &Markdown{}
}

func (md *Markdown) Startup(ctx context.Context) {
	md.ctx = ctx
}

func (md *Markdown) SaveMarkdown(filename string, content string) error {
	if filename == "" {
		return errors.New("filename cannot be empty")
	}

	if filepath.Ext(filename) != ".md" {
		filename += ".md"
	}

	fullpath := filepath.Join(TESTFS, filename)

	return os.WriteFile(fullpath, []byte(content), 0770)
}

func (md *Markdown) GetMarkdown(filename string) (string, error) {
	if filename == "" {
		return "", errors.New("filename cannot be empty")
	}

	if filepath.Ext(filename) != ".md" {
		filename += ".md"
	}

	fullpath := filepath.Join(TESTFS, filename)

	result, err := os.ReadFile(fullpath)
	if err != nil {
		fmt.Println(err)
	}

	return string(result), nil
}

// func (md *Markdown) ListMarkdown() []os.DirEntry {
// 	result, err := os.ReadDir(TESTFS)
// 	if err != nil {
// 		fmt.Println(err)
// 	}

// 	return result
// }
